export default function Footer() {
  return (
    <>
      <div className="text-center mb-4">
        <h2>
          Created by <em className="font-bold">Andrea Margutti</em>
        </h2>
      </div>
      <div id="socials" className="text-center">
        <ul className="list-none *:mb-2">
          <li>
            <i className="fa-brands fa-lg fa-github"></i>
            <span className="ms-2">
              <a
                href="https://github.com/AndreaMargutti"
                className="hover:underline underline-offset-4"
              >
                GITHUB
              </a>
            </span>
          </li>
          <li>
            <i className="fa-brands fa-linkedin fa-lg"></i>
            <span className="ms-2">
              <a
                href="https://www.linkedin.com/in/andrea-margutti-688841238/"
                className="hover:underline underline-offset-4"
              >
                LINKEDIN
              </a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
