class ChecklistsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @checklists = Checklist.all
    @checklist = Checklist.new # Need to make instnce variable available in my index view.
    # is it possible I'd have to put the respond_to block in here?
  end

  def new
    @checklist = Checklist.new
    # No need for format.html block if you only respond to HTML - might be redundant
    respond_to do |format|
      # format.html
      # format.turbo_stream
      format.html { render layout: !request.headers["Turbo-Frame"].present? }
    end
  end

  def create
    @checklist = Checklist.new(checklist_params)
    @checklist.user_id = current_user.id
    respond_to do |format|
      if @checklist.save
        format.html { redirect_to checklist_path(@checklist), notice: 'Checklist created successfully' }
        format.turbo_stream { redirect_to checklist_path(@checklist) }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.turbo_stream { render :new, status: :unprocessable_entity }
      end
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
