// "use client";
// import React from "react";
// import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

// import Loading from "@/components/Loading.component";
// import ErrorMessage from "@/components/ErrorMessage.component";
// import Image from "next/image";

// function Profile() {
//   const { user, isLoading } = useUser();

//   return (
//     <>
//       {isLoading && <Loading />}
//       {user && (
//         <>
//           {user.picture && (
//             <Image
//               src={user.picture}
//               alt="Profile"
//               className=""
//               data-testid="profile-picture"
//               width={400}
//               height={400}
//             />
//           )}
//           <p className="text-2xl">{user.name}</p>
//           <p>{user.email}</p>
//           <code>{JSON.stringify(user, null, 2)}</code>
//           <ErrorMessage>
//             <p>I am an error lol</p>
//           </ErrorMessage>
//         </>
//       )}
//     </>
//   );
// }

// export default withPageAuthRequired(Profile, {
//   onRedirecting: () => <Loading />,
//   onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
// });
