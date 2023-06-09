import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
  const [followText, setFollowText] = useState("Follow")
  
  function handleClick(ev){
     alert("você está seguindo o " + props.name)
     setFollowText("Following")
    }
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        {props.name}
        <button
          className={styles.followButton}
          onClick={handleClick}
        >
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
      className={styles.links}
      >
	        <LinkButton href={props.githubUrl} >GitHub</LinkButton>
	        <LinkButton href={props.linkedinUrl} >LinkedIn</LinkButton>
	        <LinkButton href={props.twitterUrl} >Intagram</LinkButton>
				
      </ProfileSection>
    </div>
  )
}