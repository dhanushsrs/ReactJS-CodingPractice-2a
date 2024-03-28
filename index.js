const Button = props => {
  //  Write your code here.
  const {buttonText, className} = props
  return <button className={className}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Social Buttons </h1>
    <div className='button-container'>
      <Button buttonText='Like' className='like-btn' />
      <Button buttonText='Comment' className='comment-btn' />
      <Button buttonText='Share' className='share-btn' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
