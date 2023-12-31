/* eslint-disable react/prop-types */
import { AUTH_TOKEN } from "./Constant";// ...
import { timeDifferenceForDate } from "../utils/utils";
import { gql, useMutation } from "@apollo/client";
const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;
const Link = (props) => {
    const { link } = props;
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const [vote] = useMutation(VOTE_MUTATION, {
        variables: {
          linkId: link.id
        }
      });
 

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{props.index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: 'pointer' }}
            onClick={vote}
          >
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        {(
          <div className="f6 lh-copy gray">
            {link.votes} votes | by{' '}
            {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Link;