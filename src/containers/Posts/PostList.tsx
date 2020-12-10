import React, { Component } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CircularProgress, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Post } from '../../store/posts/types';
import { fetchRequest } from '../../store/posts/actions';

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
  loading: boolean
  postList: Post[]
  errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch

class PostList extends Component<AllProps> {
  
  componentDidMount() {
    console.log(this.props);
    const { fetchRequest } = this.props;
    fetchRequest()
  }

  render() {
    console.log(this.props); 
    const { postList } = this.props;

    let allPosts = null;

    allPosts = postList.map(post => {
      return(
        <Card key={post.id} style={{marginBottom: '20px'}}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                #{post.id}. {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">Read More</Button>
          </CardActions>
        </Card>
      )
    })

    return (
      <div className='text-left'>
        <h2>Blog Post List</h2>
        {
          this.props.postList && this.props.postList.length > 0? 
            allPosts
           :
           <CircularProgress />
        }
        
      </div>
    )
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ posts }: ApplicationState) => {
  console.log(posts);
  return {
    loading: posts.loading,
    errors: posts.errors,
    postList: posts.postList
  }
}

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
  fetchRequest
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

  // fix the connect method related error  by importing  'import { connect } from 'react-redux';' 