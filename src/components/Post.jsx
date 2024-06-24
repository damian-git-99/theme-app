import { Button } from './Header'
import { useTheme } from 'styled-components'
import './post.css'

const img =
  'https://images.unsplash.com/photo-1659521996814-5436db7916eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1507&q=80'
export const Post = () => {
  const theme = useTheme()
  return (
    <article style={{ ...theme }} className="post">
      <h2 className="post-title">Post Title</h2>
      <p className="post-author">By Damian Galvan</p>
      <img src={img} alt="image" className="post-image"></img>
      <p className="post-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lacus ac felis eleifend efficitur. Proin vel ex euismod, fermentum
        mauris eget, imperdiet justo. Sed vehicula nunc eu metus fermentum, at
        auctor arcu mollis. Ut quis congue lectus, eget feugiat ipsum. Sed at
        nunc id sapien tincidunt ultrices. Sed at eleifend velit. Aliquam
        faucibus, dolor vel eleifend blandit, sapien ex molestie mi, vitae
        tincidunt quam leo vel orci.
      </p>
      <Button style={{ ...theme }}>Read More</Button>
    </article>
  )
}
