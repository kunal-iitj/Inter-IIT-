import numpy as np
import pandas as pd

songs= pd.read_csv('songs.csv')
likes= pd.read_csv('likes.csv')

df= songs.merge(likes, how='left', on='songId')

common_songs=df
n_songs=common_songs['songName'].nunique()

user_song_df=common_songs.pivot_table(index=['userId'], columns=['songName'], values= "like")




def songs_liked_by_user(userId):
    random_user=userId
    random_user_df=user_song_df[user_song_df.index== random_user]
    songs_liked=random_user_df.columns[random_user_df.notna().any()].to_list()
    return random_user_df,songs_liked

def n_songs_liked_by_user(userId):
    random_user=userId
    random_user_df=user_song_df[user_song_df.index== random_user]
    songs_liked=random_user_df.columns[random_user_df.notna().any()].to_list()
    n_songs_liked=len(songs_liked)
    return n_songs_liked

def recommended_songs_user(user):
  random_user_df,songs_liked=songs_liked_by_user(user)
  songs_liked_df = user_song_df[songs_liked]
  user_song_count = songs_liked_df.T.notnull().sum()
  user_song_count = user_song_count.reset_index()
  user_song_count.columns = ["userId","song_count"]
  user_song_count['jaq_ind']=user_song_count['song_count']/n_songs_liked_by_user(user_song_count['userId'])

  perc=(30/100)
  user_song_count= user_song_count[user_song_count["jaq_ind"] > perc]

  top_users_likes =user_song_count.merge(likes[["userId", "songId", "like"]], how='inner')
  top_users_likes = top_users_likes[top_users_likes["userId"] != user]
  top_users_likes['weighted_like'] = top_users_likes['jaq_ind'] * top_users_likes['like']
  top_users_likes.groupby('songId').agg({"weighted_like": "mean"})


  recommendation_df = top_users_likes.groupby('songId').agg({"weighted_like": "mean"})
  recommendation_df = recommendation_df.reset_index()

  songs_to_be_recommend = recommendation_df[recommendation_df["weighted_like"] > 0.2].sort_values("weighted_like", ascending=False)
  recommended_songs=songs_to_be_recommend.merge(songs[["songId", "songName"]])
  
  return (recommended_songs['songName'])

def recommended_songs_song(song_name, n):
  song_name = user_song_df[song_name]
  songs_from_item_based = user_song_df.corrwith(song_name).sort_values(ascending=False)
  return songs_from_item_based[1:n].index.to_list()
user=1
song="Khesariya"

print("Recommended songs for the user",user,": \n")
print(recommended_songs_user(user))
print("\n\n")

print("Recommended songs based on the song",song,": \n")
print(recommended_songs_song(song,4))
