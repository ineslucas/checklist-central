class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:show]
  before_action :set_checklist
  before_action :set_task, except: [:create]
    # we don't want it on the create method because it's only after that method has been executed that the ID is created

  # method 'new' not needed

  def create
    @task = @checklist.tasks.create(task_params)
    # @task.user_id = current_user.id

    if @task.save
      redirect_to @checklist, notice: 'Task added successfully'
    else
      render :new
    end
  end

  def destroy
    # @task = @checklist.tasks.find(params[:id]) - stay DRY - this is not needed anymore because now we have before_action :set_task, except: [:create]
    if @task.destroy
      flash[:success] = "Task has been deleted"
    else
      flash[:error] = "Task could not be deleted"
    end
    redirect_to @checklist, status: :see_other
  end

  def completed
    # Toggle the completed status of the task
    @task.update_attribute(:completed, !@task.completed)

    # Use a conditional to set an appropriate notice message
    notice_message = @task.completed ? "Task completed" : "Task marked as incomplete"

    redirect_to @checklist, notice: notice_message
  end

  private

  def set_checklist
    @checklist = Checklist.find(params[:checklist_id])
  end

  def set_task
    @task = @checklist.tasks.find(params[:id])
  end

  def task_params
    # it's recommended to use the require method when you're confident that a certain parameter must be present in the params hash, as it raises a more informative error message if it's not.
    params.require(:task).permit(:title, :details)
  end
end
