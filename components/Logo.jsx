import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' width={64} height={64} priority alt='' className='rounded-2xl object-cover' />
    </Link>
  )
}

export default Logo