class NotesController < ApplicationController
  before_action :ensure_that_signed_in

  def create
    @note = Note.new(note_params)
    @note.user = current_user
    @note.save
    render plain: "note saved"
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render plain: "note destroyed"
  end

  private

  def note_params
    params.require(:note).permit(:note, :rating, :recipe_id)
  end

end
