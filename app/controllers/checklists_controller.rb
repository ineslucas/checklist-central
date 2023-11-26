class ChecklistsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @checklists = Checklist.all
    @checklist = Checklist.new # Need to make instnce variable available in my index view.
    # Do I need to add the respond_to block here as well?
  end

  def new
    @checklist = Checklist.new
    # No need for format.html block if you only respond to HTML - might be redundant
    respond_to do |format|
      # format.html
      format.turbo_stream
      format.html { render layout: !request.headers["Turbo-Frame"].present? }
    end
  end

  def create
    @checklist = Checklist.new(checklist_params)
    @checklist.user_id = current_user.id
    respond_to do |format|
      if @checklist.save
        format.turbo_stream do
          render turbo_stream: turbo_stream.append(
            :allChecklists, # Need to ensure that the :allChecklists symbol matches the ID of the container in my index.html.erb/new.html.erb file where you want to append the new checklist.
            partial: "checklists/checklist",
            locals: { checklist: @checklist }
          )
        end
        # format.html { redirect_to @checklist, notice: 'Checklist created successfully' }
        # format.json # Follows the classic Rails flow and look for a create.json view
        # format.html { redirect_to checklists_url }
      else
        format.turbo_stream { render :new, status: :unprocessable_entity }
        format.html { render :new, status: :unprocessable_entity }
        format.json # Follows the classic Rails flow and look for a create.json view
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
