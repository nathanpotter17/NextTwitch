"use server";

import { followUser, unfollowUser } from "@/lib/follow-service";

import { revalidatePath } from "next/cache";

//secure using use server instead of leaking into the bundle

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);

    //revalidate, get newest - normally would have to update global store, but not with server actions
    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }
    return followedUser;
  } catch {
    throw new Error("Internal Server Error");
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const unfollowedUser = await unfollowUser(id);

    revalidatePath("/");

    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.username}`);
    }

    return unfollowedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
