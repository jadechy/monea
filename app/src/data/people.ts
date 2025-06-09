import placeholderAvatar from "@/assets/placeholder_people.jpg"

export type People = {
  id: string
  firstname: string
  lastname: string
  email: string
  pseudo: string
  avatar: string
}

export const peoplesData: People[] = [
  {
    id: "1",
    firstname: "Jean",
    lastname: "Dupont",
    email: "jean.dupont@example.com",
    pseudo: "jdupont",
    avatar: placeholderAvatar,
  },
  {
    id: "2",
    firstname: "Marie",
    lastname: "Durand",
    email: "marie.durand@example.com",
    pseudo: "maried",
    avatar: placeholderAvatar,
  },
  {
    id: "3",
    firstname: "Paul",
    lastname: "Martin",
    email: "paul.martin@example.com",
    pseudo: "pmartin",
    avatar: placeholderAvatar,
  },
  {
    id: "4",
    firstname: "Sophie",
    lastname: "Lemoine",
    email: "sophie.lemoine@example.com",
    pseudo: "soph",
    avatar: placeholderAvatar,
  },
  {
    id: "5",
    firstname: "Alexandre",
    lastname: "Bernard",
    email: "alex.bernard@example.com",
    pseudo: "alexb",
    avatar: placeholderAvatar,
  },
]
