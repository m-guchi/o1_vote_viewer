import React from 'react'
import { Button } from '@material-ui/core'

import Sample from './Sample'

function Main() {
    return(
        <div>
            <header>
                <div>2020年まちかね祭 O-1 Grand Prix</div>
            </header>
            {/* <Sample /> */ }
            <div>
            <iframe width="80%" height="300" src="https://www.youtube.com/embed/xDMP3i36naA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <h2>予選</h2>
            <Button
            variant="contained"
            color="primary"
            size="large"
            >投票はこちら
            </Button>
            <h2>決勝</h2>
            <Button
            variant="contained"
            color="primary"
            size="large"
            >投票はこちら
            </Button>
        </div>
    )
}

export default Main;
