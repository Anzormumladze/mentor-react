import { useState, useEffect, useCallback } from 'react';
import useAuthors from './useAuthors';

interface Task {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
}

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;
  const { authors } = useAuthors();

  const fetchTasks = useCallback(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTasks(parsedTasks);
      setTotalPages(Math.ceil(parsedTasks.length / limit));
    }
  }, [limit]);

  useEffect(() => {
    if (authors.length > 0) {
      fetchTasks();
    }
  }, [fetchTasks, authors]);

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      id: tasks.length + 1,
      ...task,
    };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return {
    tasks: tasks.slice((page - 1) * limit, page * limit),
    addTask,
    page,
    setPage,
    totalPages,
  };
};

export default useTasks;
