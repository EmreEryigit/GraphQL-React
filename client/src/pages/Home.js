import React from 'react'
import {  List, Skeleton } from 'antd';
import {gql , useQuery} from "@apollo/client"
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
const GET_EVENTS = gql`
  query getAllEvents {
    events{
      title
      desc
      date
      id
      
    }
  }
`
function Home() {
  const {loading , error, data} = useQuery(GET_EVENTS)
  if(loading) {
    return <div>...Loading</div>
  }
  if(error) {
    return <div>Error</div>
  }
  console.log(data.events)
  return (
    <List
    className="demo-loadmore-list"
   
    itemLayout="horizontal"
    
    dataSource={data.events}
    renderItem={(item) => (
     <List.Item>

  
        <Skeleton  title={false} loading={item.loading} active>
          <List.Item.Meta
           avatar={item.date}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.desc.substring(0, 200) + "..."}
           
          />

         
          <Tooltip title="search">
      
        <Link to={`/event/${item.id}`}>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} >
        </Button>
        </Link>
      
    </Tooltip>
        </Skeleton>
        </List.Item>
    )}
  />
  )
}

export default Home