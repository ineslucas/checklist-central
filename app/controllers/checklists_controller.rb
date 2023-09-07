class ChecklistsController < ApplicationController
  def index
    @checklists = Checklist.all
  end

  def new
    @checklist = Checklist.new
  end

  def create
    @checklist = Checklist.new(checklist_params)
    @checklist.user_id = current_user.id
    if @checklist.save
      redirect_to checklists_path(@checklist), notice: 'Checklist created successfully'
    else
      render :new
    end
  end

  def show
    @checklist = Checklist.find(params[:id])
  end

  def edit
    @checklist = Checklist.find(params[:id])
  end

  def update
    @checklist = Checklist.find(params[:id])
    @checklist.update(checklist_params)
    redirect_to checklist_path(@checklist)
  end

  def destroy
    @checklist = Checklist.find(params[:id])
    if @checklist.destroy
      flash[:success] = "Checklist has been deleted"
    else
      flash[:error] = "Checklist could not be deleted"
    end
    redirect_to root_url, status: :see_other
  end

  private

  def checklist_params
    params.require(:checklist).permit(:title, :category, :description)
  end
end
