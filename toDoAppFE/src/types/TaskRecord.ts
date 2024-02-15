export interface TaskRecord {
    id: string;
    taskName: string;
    bookmarkId: string;
    active: boolean;
    description: string,
    priority: number;
    deadlineDate: string;
}