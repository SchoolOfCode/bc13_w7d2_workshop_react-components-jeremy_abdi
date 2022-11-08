// - Inside index.js create a functional component that returns a JSX div.
// - Add a className `className="card"` to the JSX as there is a class allready applied to it in App.css (you can customize the CSS if you have time!).
function Cards({children}) {
    return (
        <div className="card">
            {children} 
        </div>
    )
}
export default Cards