import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../pages/functions";

// const API_URL = "https://cors-anywhere.herokuapp.com/https://test.bss.nz/api";
const API_URL = "https://test.bss.nz/api";

export type UserType = {
  unid: string;
  username: string;
  passhash: string;
  token: string;
  admin: boolean;
  meta: {};
} | null;

export type authContextType = {
  user: UserType;
  // setUser: () => void;
  login: () => void;
  logout: () => void;
} | null;

const authContextDefaultValues: authContextType = {
  user: null,
  // setUser: () => { },
  login: () => { },
  logout: () => { },
};

const UserDefault = {
  unid: '',
  username: '',
  passhash: '',
  token: '',
  admin: false,
  meta: {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useState<UserType>(null);
  // const { data, status } = useSession();

  const login = () => {
    router.push('/login')
  };

  const logout = () => {
    signOut()
    setUser(null);
    router.push('/login')
  };


  useEffect(() => {
    const fetch = async () => {
      const session = await getSession();
      // console.log(session);
      const user = session?.user
      setUser(user);
      // console.log(token);

      // if (token === "Incorrect password") {
      //   return;
      // }
      // if (token === "User not found") {
      //   return;
      // }

      // const res = await getCurrentUser(token);

      // if (res.status === 500) {
      //   console.log(res.message);
      //   router.push('/login');
      //   return;
      // }
      // res && setUser(res.currentUser);
    }
    !user && fetch();
    // }
  }, [router, user]);

  return (
    <>
      <AuthContext.Provider value={{
        user,
        // setUser,
        login,
        logout,
      }}>{children}</AuthContext.Provider>
    </>
  );
}

async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return await fetch(url, config)
    .then((response) => {
      console.log(response.text);

      return response.text
      // return response.json() 
    })
    .then((data) => {
      console.log(data);
      return data as TResponse
    });
}

export const register = async (
  username: string,
  password: string,
  admin = false,
  token?: string
) => {

  const headers: Record<string, string> = token
    ? {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
      'Access-Control-Allow-Methods': '*',
      "Content-Type": "application/json",
      Authorization: token
    }
    : {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
      'Access-Control-Allow-Methods': '*',
      "Content-Type": "application/json"
    };
  try {
    const user = await request<authContextType>(`${API_URL}/user`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username, password, admin }),
    });
    console.log(user);

    // const user = {
    //   unid: '0536fb969b9c15d82c36db99a90d2baa',
    //   username: username,
    //   passhash: 'sdlsdoi34klsdk3oljkl@#sdioeiflkil',
    //   token: "0536fb969b9c15d82c36db99a90d2baa",
    //   admin: false,
    //   meta: {}
    // };
    return user;
  } catch (error) {
    throw new Error("Registration failed");
  }
};
