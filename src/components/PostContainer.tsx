import React, { useEffect, useState } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
	const [limit, setLimit] = useState(10)

	const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, /* {
		pollingInterval: 2000
	} */)

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLimit(3)
	// 	}, 5000)
	// }, [])

	return (
		<div>
			<div className='post__list'>
				{/* <button onClick={() => refetch()}>REFETCH</button> */}
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>dwdwdddd</h1>}
				{posts && posts.map(post =>
					<PostItem key={post.id} post={post} />
				)}
			</div>
		</div>
	)
}

export default PostContainer