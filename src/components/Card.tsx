import { CardInterface } from "../types"
import Badge from "./Badge"
import Button from "./Button"
import styles from './Card.module.css'

const Card = ({body,btn,title,badge,image,indicator, subtitle}: CardInterface) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
      {indicator &&
        <small className={styles.indicator}>{indicator}</small>
      }
      {badge &&
        <Badge text={badge.text} filled={badge.filled} />
      }
      {image &&
        <img src={image} alt="Random Image" className={styles.image} />
      }
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle &&
          <small className={styles.subtitle}>{subtitle}</small>
        }
      </div>
      <p className={styles.body}>{body}</p>
      <Button
        filled={btn.filled}
        type={btn.type}
        text={btn.text}
        href={btn.href}
        icon={btn.icon}
      />
    </article>
  )
}
export default Card