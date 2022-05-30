import { Delete, Edit } from '@mui/icons-material'
import React from 'react'
import '../styles/singlePost.scss'

const SinglePost = () => {
  return (
    <>
     <div className='s-post'>
        <div className="s-post-wrapper">
            <img src="https://www.diocesecpa.org/blog/wp-content/uploads/2019/07/Focus.jpg" alt="sjjs" />
        <div className="s-title">The Nieon Cammera
        <div className="action">
            <Edit className='action-icon'/>
            <Delete className='action-icon'/>
        </div>
        </div>
        <div className="s-post-info">
            <span className="s-post-auth">Author: <b>Shivam Upadhyay</b></span>
            <span className="s-post-date">1 hour ago</span>
        </div>
        <p className='s-post-desc'>
        I was focused intently on the one square foot of land beneath my feet that changed with each step that I took, drawing closer and closer to the goal of the end of Peter’s Mountain on our Appalachian Camino hike.  It was a focus that was necessary as my hiking party and I traversed the section of the trail in our diocese, otherwise known as “Rocksylvania.”  Ironic, a little, that we were out in the wilds to enjoy the grandeur and beauty of nature… and just staying upright required careful and sustained focus on the ground just in front of us.  Hiking this way over a period of days, one learns to stop from time to time to look up and take a swig of water, but for the most part, the view is limited:  this rock, that root, this rock, that patch of dirt. Focus.

        Today, I am focused on a day that has finally arrived, after 9 months in the waiting.  It is the due date for our daughter and son-in-law’s first baby. “Cumberbatch” (not his real name, I hope) is due today- on the 4thof July- and as I pad around the house getting my suitcase ready for our trip to greet him, I keep an eagle eye on my phone-  just in case I missed a text or phone call.
        There is a gift of focus. It allows for truly “being in the room.” Last week I was invited to join a “learning community” sponsored by the Episcopal Church to assist with diocesan development.  One of the first requirements was that I agree to “be in the room.” Seriously?  That’s my jam. No texting, no checking Facebook, no reading emails during meetings. 
        </p>
        </div>
    </div>
    </>
  )
}

export default SinglePost