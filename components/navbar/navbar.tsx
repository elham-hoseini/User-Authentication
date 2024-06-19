import { getServerSession } from 'next-auth';
import { authOption } from '@/libs/next-auth';
import UserAvatar from './user-avatar/user-avatar';
import Container from '../ui/container';

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <nav className='border-b py-3'>
      <Container>
        <div className='flex items-center justify-start gap-x-6'>
          <div className='hidden md:block'>
          </div>
        </div>
        <div className='flex items-center justify-normal gap-x-6'>
          <UserAvatar session={session} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;