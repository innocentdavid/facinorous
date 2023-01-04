import { signOut, useSession } from "next-auth/react";
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
  data: string;
} | null;

const UserDefault = {
  unid: '',
  username: '',
  passhash: '',
  token: '',
  admin: false,
  meta: {},
};

const AuthContext = createContext<UserType | undefined>(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useState<UserType>();
  const { data: session, status } = useSession();
  // console.log(session, status);



  const login = () => { };

  const logout = () => {
    signOut()
    setUser(undefined);
  };

  useEffect(() => {
    if (session && session?.user) {
      const token = session.user;
      // console.log(token);

      const fetch = async () => {
        const res = await getCurrentUser(token);
        // console.log(res);
        
        if (res.status === 500) {
          alert(res.message);
          router.push('/login')
          return;
        }
        res && setUser(res.currentUser);
      };
      fetch();
    }
  }, [session]);

  const value = {
    user,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
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
    const user = await request<UserType>(`${API_URL}/user`, {
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
