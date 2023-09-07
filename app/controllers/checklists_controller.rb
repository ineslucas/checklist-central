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

  private

  def checklist_params
    params.require(:checklist).permit(:title, :category, :description)
  end
end
