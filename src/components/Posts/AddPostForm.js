import React, { useState } from 'react';
import { usePost } from '../../hooks/usePosts';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { useAuthors } from '../../hooks/useAuthors';
import { useForm } from 'react-hook-form';

const AddPostForm = () => {
  const {} = usePost();
  const navigate = useNavigate();
  const { authors } = useAuthors();

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm();

  const onSavePostClicked = (data) => {
    console.log(data);

    reset();
    navigate('/');
  };

  const usersOptions = authors.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit(onSavePostClicked)}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          {...register('title', { required: true })}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" {...register('userId', { required: true })}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" {...register('body', { required: true })} />
        <button type="submit" disabled={!isValid}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
