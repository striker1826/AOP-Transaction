import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/common/decorators/Transaction.decorators';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  // Transaction Decorator
  @Transaction
  createPost(body: CreatePostDto) {
    // Transaction 필요!!
    this.postRepository.createPost(body);
    this.postRepository.deletePost();
    return;
  }
}
