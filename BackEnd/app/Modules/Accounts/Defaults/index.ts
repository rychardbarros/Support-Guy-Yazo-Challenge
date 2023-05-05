import { ModelType } from 'App/Shared/Interfaces/BaseInterface'
import User from 'App/Modules/Accounts/Models/User'
import Role from 'App/Modules/Accounts/Models/Role'

type UserDefaultType = ModelType<typeof User> & { roleName: string }

export const RolesDefault: Array<ModelType<typeof Role>> = [
  {
    slug: 'Root',
    name: 'root',
    description: 'a root user system',
    is_active: true,
    deletable: false,
  },
  {
    slug: 'Admin',
    name: 'admin',
    description: 'a Admin user system',
    is_active: true,
    deletable: false,
  },
  {
    slug: 'User',
    name: 'user',
    description: 'a common user system',
    is_active: true,
    deletable: false,
  },
  {
    slug: 'Guest',
    name: 'guest',
    description: 'a common guest user system',
    is_active: true,
    deletable: false,
  },
]

export const UsersDefault: Array<UserDefaultType> = [
  {
    first_name: 'Root',
    last_name: 'User',
    username: 'root',
    email: 'root@acl.com',
    password: 'acl@2022',
    roleName: 'root',
    source_image: 'https://i.pinimg.com/550x/46/72/d1/4672d1ad2948c2f671796826409c3897.jpg'
  },
  {
    first_name: 'Admin',
    last_name: 'User',
    username: 'Admin',
    email: 'Admin@acl.com',
    password: 'acl@2022',
    roleName: 'Admin',
    source_image: 'https://i.pinimg.com/736x/5b/a1/d6/5ba1d665944e077a70533c78e6022475.jpg'
  },
  {
    first_name: 'Gabriel',
    last_name: 'Maia',
    username: 'maia',
    email: 'gabriel.maia@acl.com',
    password: 'acl@2022',
    roleName: 'user',
    source_image: 'https://culturardotblog.files.wordpress.com/2022/07/megumi.jpg'
  },
]
