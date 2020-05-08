const MyProfile = ({ children }) => {
  const [title] = useState('Profile page')

  return (
    <div>
      <span>{title}</span>
      <br />
      {children}
    </div>
  )
}

export default memo(MyProfile)
