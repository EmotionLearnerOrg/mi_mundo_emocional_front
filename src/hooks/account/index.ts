import {useMutation, useQuery} from 'react-query';
import {
  getDisplayName,
  loginWithEmailAndPassword,
  signUpWithEmailAndPassword,
  updateDisplayName,
} from '../../services/account/account.service';
import {ResponseType} from '../../contexts';

export const useLoginWithEmailAndPassword = (props: ResponseType) => {
  return useMutation(
    'useLoginWithEmailAndPassword',
    (data: {email: string; password: string}) =>
      loginWithEmailAndPassword({
        email: data.email,
        password: data.password,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};

export const useSignUpWithEmailAndPassword = (props: ResponseType) => {
  return useMutation(
    'useSignInWithEmailAndPassword',
    (data: {email: string; password: string; nickName: string}) =>
      signUpWithEmailAndPassword({
        email: data.email,
        password: data.password,
        nickName: data.nickName,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};

export const useUpdateDisplayName = (props: ResponseType & {uid: string}) => {
  return useMutation(
    'useUpdateDisplayName',
    (data: {nickName: string}) =>
      updateDisplayName({
        nickName: data.nickName,
        uid: props.uid,
      }),
    {
      onSuccess: () => props.onSuccess && props.onSuccess(),
      onError: () => props.onError && props.onError(),
    },
  );
};

export const useGetNicknameByUser = (props: ResponseType & {uid: string}) => {
  return useQuery({
    queryKey: `useGetNicknameByUser${props.uid}`,
    queryFn: () => getDisplayName({uid: props.uid}),
  });
};
