import React from 'react';
import Colors from '../../theme/Colors';
import './colorpage.css';


const ColorPage: React.FC = () => {

  const colorEntry = (color: string) => (
    <div style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
    <div 
      style={{
        backgroundColor: color, 
        width: 300,
        height: 100,
        borderRadius: 8}} />
       <div className='color'>
          {color}
        </div> 
  </div>

  )
  return (
    <article>
      <section className='storybook-page'>
        <h2>Colors</h2>
        <p>This is the color pallete for AceNet and EJD portals.</p>
        <div>
          <div className='title'>Helpful Red</div>
          {colorEntry(Colors.helpfulRed)}
        </div>
        <div>
        <div className='title'>Ace Gray</div>
          {colorEntry(Colors.aceGray)}
        </div>
        <div>
        <div className='title'>Mantis Green</div>
          {colorEntry(Colors.mantisGreen)}
        </div>
        <div>
        <div className='title'> Danelion</div>
          {colorEntry(Colors.danelion)}
        </div>
        <div>
        <div className='title'>Pool</div>
          {colorEntry(Colors.pool)}
        </div>
        <div>
        <div className='title'>Hyperlink Blue</div>
          {colorEntry(Colors.hyperlinkBlue)}
        </div>
      </section>
    </article>
  )
}

export default ColorPage;