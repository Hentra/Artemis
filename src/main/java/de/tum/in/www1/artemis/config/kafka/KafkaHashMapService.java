package de.tum.in.www1.artemis.config.kafka;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaHashMapService {

    private List<KafkaHashMap> kafkaHashMaps = new ArrayList<>();

    @Value("${kafka.groupid}")
    private final String groupId = "group1";

    /**
     * Registers a new HashMap
     * @param map the HashMap that should be supported
     */
    public void registerHashMap(KafkaHashMap map) {
        kafkaHashMaps.add(map);
    }

    @KafkaListener(topics = "hashmap", groupId = groupId)
    public void listen(String message) {

    }

}