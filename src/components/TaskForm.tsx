import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import useAuthors from '../hooks/useAuthors';

interface TaskFormProps {
  onSubmit: SubmitHandler<TaskFormValues>;
}

interface TaskFormValues {
  title: string;
  description: string;
  authorId: number;
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  authorId: yup.number().required('Author is required'),
});

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<TaskFormValues>({
    resolver: yupResolver(schema),
  });

  const { authors } = useAuthors();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <Typography variant="h6">Add Task</Typography>
      <TextField
        fullWidth
        label="Title"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        {...register("description")}
        error={!!errors.description}
        helperText={errors.description?.message}
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Author</InputLabel>
        <Select
          {...register("authorId")}
          error={!!errors.authorId}
          onChange={(e) => setValue("authorId", e.target.value as number)}
        >
          {authors.map((author) => (
            <MenuItem key={author.id} value={author.id}>
              {author.first_name} {author.last_name}
            </MenuItem>
          ))}
        </Select>
        {errors.authorId && <Typography color="error">{errors.authorId.message}</Typography>}
      </FormControl>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Task
      </Button>
    </Box>
  );
}

export default TaskForm;
