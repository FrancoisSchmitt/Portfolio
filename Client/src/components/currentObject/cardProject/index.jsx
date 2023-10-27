import './index.css';
// import rec from '../../../assets/OhmyFoodAffinity.png';

/**
 *
 * @function CardProject it was a function to display elements with props
 * @returns
 */

export default function CardProject(props) {
      return (
            <>
                  <img src={props.image} alt={props.altImage} />
            </>
      );
}
