import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import useTasks from '../hooks/useTasks';
import useAuthors from '../hooks/useAuthors';
import { Container, Typography, Box } from '@mui/material';

const Tasks: React.FC = () => {
  const { tasks, addTask, page, setPage, totalPages } = useTasks();
  const { authors } = useAuthors();

  const handleAddTask = (data: { title: string; description: string; authorId: number }) => {
    const selectedAuthor = authors.find(author => author.id === data.authorId);
    const newTask = {
      title: data.title,
      description: data.description,
      author: selectedAuthor ? `${selectedAuthor.first_name} ${selectedAuthor.last_name}` : 'Unknown Author',
      imageUrl: selectedAuthor ? selectedAuthor.avatar : ''
    };
    addTask(newTask);
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Tasks
        </Typography>
        <TaskForm onSubmit={handleAddTask} />
        <TaskList tasks={tasks} page={page} setPage={setPage} totalPages={totalPages} />
      </Box>
    </Container>
  );
}

export default Tasks;
