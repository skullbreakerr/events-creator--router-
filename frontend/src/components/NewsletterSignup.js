import { useEffect } from 'react';
import { useFetcher, useNavigate} from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  function handleOpenAuth(){
    navigate("/user-auth");
  }

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button onClick={handleOpenAuth}>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
