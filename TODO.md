# Everything I wanna do with this site essentially

## Completed: 0.002%

### Ideas

#### Front end

- Background color will be #1e1e1e

- Font color will be #ddd

- Navbar will be slightly lighter in color from the body to denote a higher elevation.

- There will be a shadow beneath the navbar.

- Headings will be BLUE in the format of # headings

- Headings will be half the size of the main title, but double the size of the sub-headings.

- Subheading will also be white, but in a smaller font and bold.

- References will be made to programming to symbolize my character e.g. me.Programming, me.Hobbies

- Main title will be #ddd, on the left side of the screen with a margin of 10%

#### Back end

##### Design

- Main stuff:

  - Create a new blog post
  - Edit a blog post
  - Save the post
  - Comments
  - View the blog post
  - View all blog posts
  - Sign up page
  - Login page
  - Logout page
  - User profile page
  - Post category

- User settings page:

  - Main page:
    - Change password
    - Change email
    - Change username
    - Change bio
    - Change profile picture
    - Change background picture
    - Change color scheme
    - Default post visibility
    - Default comment visibility
    - Default comment sort
    - Default post sort
    - Default post per page
    - Default comment per page

  - Privacy page:
    - Allow users to view my profile
    - Allow users to view my posts
    - Allow users to view my comments
    - Allow users to view my likes
    - Allow users to view my followers
    - Allow users to view my following
    - Allow commenting on my posts
    - Allow followers

##### Database

Database will be a mysql database.

Might self host the database.

Login system will not be accessible until this long ass project gets finalized.

Gotta focus on security too so it's gonna be a lot of work.

Each user might have a table for their own data.

User tables will contain:

- Username
- Password
- Email
- Bio
- Profile picture ( url )
- Background picture ( url )
- Color scheme
- Their posts
- Their comments
- Their likes
- Their followers
- Their following
- Privacy settings
- User settings

Generic database structure will be

- Create a new user
- Edit a user
- Delete a user
- Create a new post
- Edit a post
- Delete a post
- Create a new comment
- Edit a comment
- Delete a comment
- Create a new like
- Delete a like
- Create a new follower
- Delete a follower
- Create a new following
- Delete a following
- Create a new notification
- Delete a notification
- User settings ( JSON? )
- Privacy settings ( JSON? )

Generic setting structure will be:

```JSON
{
  "setting": "value",
  "setting": "value",
  "setting": {
    "setting": "value",
    "setting": "value",
  },
  "setting": ["value", "value", "value"]
}
```

Might host the user settings on a private API only accessible with user's access token...
