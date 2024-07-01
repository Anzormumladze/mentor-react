import React from 'react';
import { motion } from 'framer-motion';
import { List, ListItem, ListItemText, Box, Paper, Pagination, Avatar } from '@mui/material';

interface Task {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
}

interface TaskListProps {
  tasks: Task[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, page, setPage, totalPages }) => {
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <List>
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            variants={listItemVariants}
          >
            <Paper elevation={3} sx={{ mb: 2, p: 2 }}>
              <ListItem>
                <Avatar alt={task.author} src={task.imageUrl} sx={{ mr: 2 }} />
                <ListItemText
                  primary={task.title}
                  secondary={`${task.description} - ${task.author}`}
                />
              </ListItem>
            </Paper>
          </motion.div>
        ))}
      </List>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}

export default TaskList;
