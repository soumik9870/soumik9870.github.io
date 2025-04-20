
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileMenu = ({ isOpen, menuItems, handleNavClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -10 }}
      animate={{ opacity: 1, height: 'auto', y: 0 }}
      exit={{ opacity: 0, height: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="md:hidden"
    >
      <motion.div 
        className="px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 bg-black/30 backdrop-blur-xl border border-white/10"
      >
        {menuItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-300"
            onClick={(e) => handleNavClick(e, item.href)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
