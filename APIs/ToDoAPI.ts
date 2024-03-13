import { APIRequestContext } from "@playwright/test";
import User from "../Models/UserInit";

export default class ToDoAPI {
async addToDo (request: APIRequestContext, user: User) {
    return await request.post('/api/v1/tasks', {
        data: {
          isCompleted: false,
          item: 'Learn Playwright',
        },
        headers: {
          Authorization: `Bearer ${user.getAccessToken()}`,
        },
      });
    }

}