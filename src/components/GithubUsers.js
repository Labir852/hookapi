import React from 'react'

const GithubUsers = ({users}) => {
    
  return (
    <>
        <h1 className="ComTitle">List of Github User</h1 >
        <div className="container-fluid mt-5">
            <div className="row text-center">
                {
                    users.map((curElem) => {
                        return(
                            <div className="col-10 mt-5 col-md-4">
                    <div className="card1 p-2">
                         <div className="d-flex align-items-center">
                            
                            <div className="image">
                                <img src={curElem.avatar_url} className="rounded" width="155" alt=""/>
                            </div>
                            <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4><span className="textLeft">{curElem.type}</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    <div className="d-flex flex-column"><span className="articles">Articles</span><span className="number1">38</span></div>
                                    <div className="d-flex flex-column"><span className="followers">Followers</span><span className="number2">980</span></div>
                                    <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number3">8.9</span></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                        )

                    })
                }
                
                
            </div>
        </div>
    </>

  )
}

export default GithubUsers