import React from 'react';
import '../../App.css'
import Hero from '../Hero'
import { Timeline } from 'react-twitter-widgets'

function Home() {
    return (
        <>
            <Hero />
            <Timeline
  dataSource={{
    sourceType: 'list',
    id: '1321683053203382272'
  }}
  options={{
      chrome: 'noheader nofooter',
    height: '600',
    width: '300',
  }}
/>
        </>
    )
}

export default Home;