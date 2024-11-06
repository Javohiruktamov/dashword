import React, { useContext, useTransition } from 'react'
import Card from '../../Components/Card/Card'
import CardWrapper from '../../Components/CardWrapper/CardWrapper'
import { useState, useEffect } from 'react'
import "./Overview.scss"
import { useTranslation } from 'react-i18next'
import { DarkmodeContext } from '../../Components/Context/DarkModeContext'

const Overview = () => {
  const { t } = useTranslation()
  let [users, setUsers] = useState([])
  let {darkMode} = useContext(DarkmodeContext)

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setUsers(data.data))
      .catch(error => console.error('Fetch error:', error));
  }, [])
  return (
    <div className={`home ${darkMode == "dark" && "dark"}`}>
      <CardWrapper>
        {
          users.filter(g => g.id <= 4).map(item => (
            <Card blue="blue" key={item.id} img={item.avatar} title={item.first_name + " " + item.last_name} email={item.email} />
          ))
        }
      </CardWrapper>


      <CardWrapper>
        <div className="bigCard">
          <div className="bigCard-item">
            <h1>Today's trends</h1>
            <p>as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="bigCard-item">
            <h1><br /></h1>
            <p>--Today  --Yesterday</p>
          </div>
        </div>
        <div className="smallcard">
          <div className="card-item">
            <p>Resolved</p>
            <h2>449</h2>
          </div>
          <div className="card-item">
            <p>Received</p>
            <h2>426</h2>
          </div>
          <div className="card-item">
            <p>Average first response time</p>
            <h2>33m</h2>
          </div>
          <div className="card-item">
            <p>average response time</p>
            <h2>3h 8m</h2>
          </div>
          <div className="card-item">
            <p>Resoulution within SLA</p>
            <h2>94%</h2>
          </div>
        </div>
      </CardWrapper>

      <div className="box__wrapper">
        <div className="box__wrapper-item">
          <h2>Unresolved tickets <span><a href="#">View details</a></span></h2>
          <p>Group: <span>Support</span></p>
          <div className="miniItem">
            <h3>Waiting on Feature Request</h3>
            <p>4238</p>
          </div>
          <div className="miniItem">
            <h3>Awaiting Customer Response</h3>
            <p>1005</p>
          </div>
          <div className="miniItem">
            <h3>Awaiting Developer Fix</h3>
            <p>914</p>
          </div>
          <div className="miniItem">
            <h3>Pending</h3>
            <p>281</p>
          </div>
        </div>
        <div className="box__wrapper-item">
          <h2>Task <span><a href="#">View all</a></span></h2>
          <p>Today</p>
          <div className="miniBox">
            <input type="text" className='inputText' placeholder='Create New task' />
          </div>
          <div className="miniBox">
            <input type="radio" name="rad" id="first" />
            <label htmlFor="first">Finish ticket update</label><br />
          </div>
          <div className="miniBox">
            <input type="radio" name="rad" id="second" />
            <label htmlFor="second">Create new ticket example</label><br />
          </div>
          <div className="miniBox">
            <input type="radio" name="rad" id="third" />
            <label htmlFor="third">Update ticket report</label><br />
          </div>
        </div>
      </div>

    </div>


  )
}

export default Overview