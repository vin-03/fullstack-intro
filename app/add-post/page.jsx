"use client";

import styles from '../page.module.css'
import { useState } from "react";
import Link from 'next/link';

export default function AddPost(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            fetch('/api/add-post', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, content})
            })
        } catch (error) {
            console.error(error)
        }
        

        setTitle('');
        setContent('');
    }

    return (
        <main className={styles.main}>
            <Link href={'/'}>Feed</Link>
            <h1>Add Post</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id='title'
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <input 
                        type="text" 
                        id='content'
                        value={content}
                        onChange={handleContentChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}