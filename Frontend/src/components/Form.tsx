import React, {useState} from 'react'
import APIService from '../APIService';
import { useCookies } from 'react-cookie'

interface Article {
    id: number;
    title: string;
    description: string;
  }

interface FormProps {
    updatedInformation(resp: any): any;
    insertedInformation(resp: any): any;
    article: Article | null;
  }

  function Form(props: FormProps) {
    const [title, setTitle] =  useState<string>(props.article?.title || '');
    const [description, setDescription] = useState<string>(props.article?.description || '');
    const [token , setToken] = useCookies(['mytoken'])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article?.id, {title, description}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title, description}, token['mytoken'])
        .then(resp => props.insertedInformation(resp))
    }
  
    return (
      <div>
        {props.article ? (
          <div className="mb-3">
            <label htmlFor='title' className='form-label'>Title</label>
            <input
              type='text'
              className='form-control'
              id="title"
              placeholder='Please Enter The Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
  
            <label htmlFor='description' className='form-label'>Description</label>
            <textarea
              className='form-control'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br /> 
            {
                props.article.id ? <button onClick={updateArticle} className='btn btn-success'>Update Article</button>
                :<button onClick={insertArticle} className='btn btn-success'>Insert Article</button>
            }

          </div>
        ) : null}
      </div>
    );
  }
  
  export default Form;
