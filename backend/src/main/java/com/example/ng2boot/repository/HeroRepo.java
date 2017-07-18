package com.example.ng2boot.repository;

import com.example.ng2boot.entity.Hero;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Description:
 * Created by Gaoxinwen on 2017/07/17.
 */
public interface HeroRepo extends JpaRepository<Hero, Integer> {
    // case-insensitive
    List<Hero> findByNameContaining(String s);
}
