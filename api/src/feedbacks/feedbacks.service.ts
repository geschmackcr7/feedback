import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject('FEEDBACKS_REPOSITORY')
    private feedbacksRepository: Repository<Feedback>,
  ) {}

  async getFeedbacks(): Promise<Feedback[]> {
    return this.feedbacksRepository.find();
  }

  async addFeedback(feedback: Feedback): Promise<InsertResult> {
    return this.feedbacksRepository.insert(feedback);
  }

  async findOne(id: number): Promise<Feedback> {
    return this.feedbacksRepository.findOne(id);
  }

  async update(id: number, feedback: Feedback): Promise<Feedback> {
    const feedbackToUpdate = await this.findOne(id);
    if (feedbackToUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.feedbacksRepository.update(id, feedback);
    return this.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    const feedback = await this.findOne(id);
    if (feedback === undefined) {
      throw new NotFoundException();
    }

    return this, this.feedbacksRepository.delete(id);
  }
}
