export class TodoItem {
    public id: number;
    public task: string;
    public completed: boolean;

    constructor(id: number, task: string, completed: boolean) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
}
