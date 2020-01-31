class Note {
  text = "";
  id;
  completed = false;
  trashed = false;
  constructor(text, id, completed, trashed) {
    this.text = text;
    this.id = id;
    this.completed = completed;
    this.trashed = trashed;
    }
}