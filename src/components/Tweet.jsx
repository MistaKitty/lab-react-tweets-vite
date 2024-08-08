import ProfileImage from "./ProfileImage";
import User from "./User";
import TimeStamp from "./TimeStamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage tweet={tweet} />

      <div className="body">
        <div className="top">
          <User tweet={tweet} /> 
          <TimeStamp tweet={tweet} /> 
        </div>
    
      <Message tweet={tweet} />

      <Actions tweet={tweet} />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
