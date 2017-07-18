package com.example.ng2boot;

import com.example.ng2boot.entity.Hero;
import com.example.ng2boot.repository.HeroRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class Ng2bootApplication {

	@Autowired
	private HeroRepo heroRepo;

	public static void main(String[] args) {
		SpringApplication.run(Ng2bootApplication.class, args);
	}



	@GetMapping("/heroes")
	public List<Hero> getAllHeroes() {
        return heroRepo.findAll();
	}

    @GetMapping("/heroes/{id}")
    public Hero getHero(@PathVariable Integer id) {
        return heroRepo.findOne(id);
    }

    @GetMapping("/heroes/search")
    public List<Hero> searchHeroes(@RequestParam(required = false, name = "name") String s) {
        return heroRepo.findByNameContaining(s);
    }

    @PutMapping("/heroes/{id}")
    public Hero updateHero(@RequestBody Hero hero) {
	    return heroRepo.saveAndFlush(hero);
    }

    @PostMapping("/heroes")
    public Hero addHero(@RequestBody Hero hero) {
        return heroRepo.saveAndFlush(hero);
    }

    @DeleteMapping("heroes/{id}")
    public void deleteHero(@PathVariable Integer id) {
	    heroRepo.delete(id);
    }


}
