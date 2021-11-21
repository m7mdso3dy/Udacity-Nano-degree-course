import React,{useState} from "react";
import Button from "../UI/Button";

const UsersList = props => {
    const [showPlayedGames, setShowPlayedGames] = useState(true);
    const showPlayedGamesHandler = e => {
        e.preventDefault();
        setShowPlayedGames(prevState => {
            return (
                !prevState
            )
        })

    }
    return (
        <React.Fragment>
            <ol>
                {
                    props.users.map(user => {
                        return (
                            <li
                                key={user.userName}
                            >
                                {`${user.userName} played ${showPlayedGames?user.numOfGamesPlayed : '\*'} games
                            `}
                            </li>
                        )
                    })
                }
            </ol>
            
            {
                props.users.length!==0 && showPlayedGames && <Button
                    onClick={showPlayedGamesHandler}
                >{'Hide Played Games'}</Button>
            }
            {
                props.users.length!==0 &&!showPlayedGames && <Button
                    onClick={showPlayedGamesHandler}
                
                >{'Show Played Games'}</Button>
            }
        </React.Fragment>
    );
}

export default UsersList;